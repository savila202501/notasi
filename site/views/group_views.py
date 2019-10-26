import flask
import pandas
import sqlalchemy
import data.db_session as db_session
from flask_login import login_required
from data.source import Group
from services.select_services import get_objects, search_object, GroupCategory
from services.save_services import save_object
import os


template_dir = os.path.abspath('./templates/group')
blueprint = flask.Blueprint('groups', __name__, template_folder = template_dir)
@blueprint.before_request
@login_required
def before_request():
    """ Protect all of the admin endpoints. """
    pass 


@blueprint.route('/group_category')
def category_index():

	return flask.render_template(
		'group_category_index.html'
		, group_categories = get_objects(GroupCategory)
	)

@blueprint.route('/group_category/edit', methods=['POST', 'GET'])
def category_edit():
	id = flask.request.args.get('id', default = None, type = int)

	if flask.request.method == "GET":
		return flask.render_template(
			'edit_group_category.html'
			, item_type = 'group_category'
			, data_obj = search_object(id=id, item_type=GroupCategory)
			, back_link = flask.request.referrer
			, group_categories = get_objects(GroupCategory)
		)


	if flask.request.method == "POST":
		data = flask.request.form
		print(data)
		save_object('group_category', id, data)
		return flask.redirect('/group/group_category')

@blueprint.route('/group/')
def group_index():
	category_id = flask.request.args.get('category_id', default = None, type = int)


	session = db_session.create_session()
	groups = session.query(Group).options(sqlalchemy.orm.joinedload('*')) \
		.filter_by(group_category_id = category_id) \
		.all()

	session.close()

	return flask.render_template(
		'group_index.html'
		, category_id = category_id
		, groups = groups
	)

@blueprint.route('/group/edit', methods=['POST', 'GET'])
def group_edit():
	id = flask.request.args.get('id', default = None, type = int)

	if flask.request.method == "GET":
		return flask.render_template(
			'edit_group.html'
			, item_type = 'group'
			, data_obj = search_object(id=id, item_type=Group)
			, back_link = flask.request.referrer
			, group_categories = get_objects(GroupCategory)
		)


	if flask.request.method == "POST":
		data = flask.request.form
		print(data)
		save_object('group', id, data)
		return flask.redirect('/group/group?category_id=' +str(data["group_category_id"]))