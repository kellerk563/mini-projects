
// otp nav
// for future, get all headers and add to otp nav

let allHeaders = document.querySelectorAll('h2, h3');

// get the otp nav
let otpListNav = document.getElementById('otp-nav');

// create first list level container
let otpList = document.createElement('ul');
otpListNav.appendChild(otpList);

allHeaders.forEach(header => {
    // add id to headers
    let createLinks = header.textContent.toLowerCase().replace(/\s+/g, '-');
    header.id = createLinks;

    if (header.tagName === 'H3') {
        // create nested ul for h3
        let lastLi = otpList.lastElementChild; // gets the last h2 header that was added
        // console.log(lastLi);
        let nestedUl;
        if (lastLi) {
            nestedUl = lastLi.querySelector('ul'); // check if nested ul already exists
            if (!nestedUl) {
                nestedUl = document.createElement('ul');
                lastLi.appendChild(nestedUl);
            }
        }
        // there should always be an h2 before an h3, but just in case
        else {
            // if there's no previous li, create one to hold the nested ul
            lastLi = document.createElement('li');
            otpList.appendChild(lastLi);
            nestedUl = document.createElement('ul');
            lastLi.appendChild(nestedUl);
        }

        // create li and a elements for h3
        let otpLink = document.createElement('li');
        let otpAnchor = document.createElement('a');
        otpAnchor.href = `#${createLinks}`;
        otpAnchor.textContent = header.textContent;
        otpLink.appendChild(otpAnchor);

        // append to nested ul
        nestedUl.appendChild(otpLink);
        return; // skip the rest of the loop for h3
    }

    // create li and a elements
    let otpLink = document.createElement('li');
    let otpAnchor = document.createElement('a');
    otpAnchor.href = `#${createLinks}`;
    otpAnchor.textContent = header.textContent;
    otpLink.appendChild(otpAnchor);

    // append to ul
    otpList.appendChild(otpLink);
});