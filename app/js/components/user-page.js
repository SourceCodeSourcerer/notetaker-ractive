'use strict';

import Ractive from 'ractive';
import Template from '../views/user-page.html';
import UserProfile from './user/user-profile-section';
import Repos from './user/repos-section';
import Notes from './user/notes-section';

var UserPage = Ractive.extend({
	template: Template,
	components: {
		UserProfile: UserProfile,
		Repos: Repos,
		Notes: Notes
	},
	oninit: function() {
		console.log('UserPage::oninit# User data:', this.get('req'));
		let request = this.get('req');
		this.set({
			username: request.params.username,
			user: request.body.user
		});
	},
	onrender: function() {
		console.log('UserPage::onrender');
	},
	data: {}
});
UserPage._name = 'UserPage';

Ractive.components.UserPage = UserPage;

export default UserPage;
