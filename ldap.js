const ldap = require('ldapjs');
const assert = require('assert');

// LDAP Connection Settings
const server = 'msk01-dc-02.dmfs.ru'
const userPrincipalName = 'prudkoy_yv@dmfs.ru'
const password = "трн6:НРТ"; // User password
const adSuffix = "OU=Usersa,OU=MSK02,OU=INGRAD,DC=Dmfs,DC=ru"; // test.com

// Create client and bind to AD
const client = ldap.createClient({
    url: `ldap://${server}`
});

client.bind(userPrincipalName,password,err => {
    assert.ifError(err);
});

// Search AD for user
const searchOptions = {
    scope: "sub",
    filter: `(userPrincipalName=p*)`
};

client.search(adSuffix,searchOptions,(err,res) => {
    assert.ifError(err);

    res.on('searchEntry', entry => {
        console.log('--'+entry.object.mail);
    });
    res.on('searchReference', referral => {
        console.log('referral: ' + referral.uris.join());
    });
    res.on('error', err => {
        console.error('error: ' + err.message);
    });
    res.on('end', result => {
        console.log('---'+result);
    });
});

// Wrap up
client.unbind( err => {
    assert.ifError(err);
});