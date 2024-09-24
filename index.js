var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://msk01-dc-02.dmfs.ru',
               baseDN: 'OU=Users,OU=MSK02,OU=INGRAD,DC=Dmfs,DC=ru',
               username: 'prudkoy_yv@dmfs.ru',
               password: 'трн6:НРТ', 
             //  attributes: {user: [ 'cn', 'telephoneNumber', 'mail' ]}
              } 
var ad = new ActiveDirectory(config);

var groupName = 'Users';

/* ad.getUsersForGroup(groupName, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! users) console.log('Group: ' + groupName + ' not found.');
  else {
    console.log(users.length);
    console.log(JSON.stringify(users));
  }
}); */

var query = 'CN=Пру*' 

ad.findUsers(query, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if ((! users) || (users.length == 0)) console.log('No users found.');
  else {
    console.log('findUsers: '+JSON.stringify(users));
    //console.log('findUsers: '+users.length);
  }
});