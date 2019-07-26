window.scrollTo(0, document.body.scrollHeight); // force "lazy-load" components to render!
setTimeout(function () {
    document.querySelector('.pv-skills-section__additional-skills').click(); // expand to see *all*
    var skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
    for (var i = 0; i < skills.length; ++i) {
        skills[i].click();
    }
}, 2000); // give the page a couple of seconds to render cause they aren't using Elm ... 