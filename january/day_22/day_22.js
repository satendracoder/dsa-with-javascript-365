var numUniqueEmails = function(emails) {
    const set = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');

        local = local.split('+')[0].replace(/\./g, '');
        set.add(local + '@' + domain);
    }
    return set.size;
};
