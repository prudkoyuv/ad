const AD = require('ad');

// Your AD account should be a member 
// of the Administrators group. 
const ad = new AD({
    url: "ldap://msk01-dc-02.dmfs.ru",
    user: 'prudkoy_yv@dmfs.ru',
    pass: 'ьог7?ГОЬ',
});

ad.user().get('CN=Пру*').then(users => {
    console.log('Your users:', users);
}).catch(err => {
    console.log('Error getting users:', err);
});

var a
