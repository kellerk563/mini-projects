$(function() {
    $('[aria-controls]').on('click', function() {
        toggleData($(this));
        findState();
    });
    findState();
});

function toggleData(eventEl) {
    let targetEl = '#' + eventEl.attr('aria-controls'); // should eventEl be $(eventEl)?
    let targetState = eventEl.attr('aria-expanded');
    if (eventEl.hasClass('slide')) {
        $(targetEl).slideToggle();
    }
    if ($(eventEl).hasClass('active')) {
        $(eventEl).removeClass('active');
        $(targetEl).removeClass('active');
    } else {
        $(eventEl).addClass('active');
        $(targetEl).addClass('active');
    }

    switchAria(eventEl, targetEl, targetState);
}

function switchAria(eventEl, targetEl, targetState) {
    if (targetState === 'true') { // if aria-expanded equals true from the toggle btn
        $(eventEl).attr('aria-expanded', 'false');
        $(targetEl).attr('aria-hidden', 'true');
    } else if (targetState === 'false') {
        $(eventEl).attr('aria-expanded', 'true');
        $(targetEl).attr('aria-hidden', 'false');
    }
}

function findState() {
    $('.toggle-btn').each(function() {
        let getAria = $(this).attr('aria-expanded');
        $(this).next().next().find('.button-aria').text('aria-expanded: ' + getAria); // button aria
        $(this).next().next().find('.menu-aria').text('aria-hidden: ' + $(this).next().attr('aria-hidden')); // menu aria
        if ($(this).hasClass('active')) {
            $(this).next().next().find('.button-state').text('Active');
            // $(this).next().hasClass('active') ? $(this).next().next().find('.button-state').text('Active with slide') : null;
        } else {
            $(this).next().next().find('.button-state').text('Inactive');
        }
        if ($(this).next().hasClass('active')) { // check menu state
            $(this).next().next().find('.menu-state').text('Active');
        } else {
            $(this).next().next().find('.menu-state').text('Inactive');
        }
    });
}

// maybe use a different attr other than aria-controles?
// what if targetState is undefined?
// add slide toggle option