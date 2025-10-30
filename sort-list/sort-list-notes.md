
1 option
``` html
 <ul id="myList">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cat</li>
    <li>Dog</li>
    <li>Ant</li>
    <li>Bear</li>
</ul>
```
``` js
function addAlphabeticalHeadings(listId) {
    const list = document.getElementById(listId);
    if (!list) return;

    const items = Array.from(list.children); // Get list items as an array

    // Sort the items alphabetically based on their text content
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Clear the original list to re-populate with headings and sorted items
    list.innerHTML = '';

    let currentHeading = '';
    items.forEach(item => {
        const firstLetter = item.textContent.charAt(0).toUpperCase();

        // If the first letter changes, add a new heading
        if (firstLetter !== currentHeading) {
            currentHeading = firstLetter;
            const heading = document.createElement('li'); // Or h2, h3 etc.
            heading.textContent = currentHeading;
            heading.classList.add('alphabet-heading'); // Optional class for styling
            list.appendChild(heading);
        }
        list.appendChild(item); // Append the sorted item
    });
}

// Call the function to apply headings to your list
addAlphabeticalHeadings('myList');
```

output:
```

```

2 option
``` html
<div id="alphabeticalList"></div>
        
<script>
    let items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Apricot", "Blueberry"];
    items.sort();

    console.log(items);

    let groupedItems = items.reduce((groups, item) => {
        let firstLetter = item.charAt(0).toUpperCase();
        if (!groups[firstLetter]) {
            groups[firstLetter] = [];
        }
        groups[firstLetter].push(item);
        return groups;
    }, {});

    console.log(groupedItems);

    let alphabeticalListDiv = document.getElementById("alphabeticalList");

    for (let letter in groupedItems) {
        let heading = document.createElement("h2");
        heading.textContent = letter;
        alphabeticalListDiv.appendChild(heading);

        let ul = document.createElement("ul");
        groupedItems[letter].forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
        alphabeticalListDiv.appendChild(ul);
    }
</script>
```

output:
```
A
Apple
Apricot

B
Banana
Blueberry

C
Cherry

D
Date

E
Elderberry
```

what I used for az filter list:
``` js
addfilterHeadings('filter-list');

// for az filter list
function addfilterHeadings(filterItems) {
	if (document.body.classList.contains('filterspage')) {
		const list = document.getElementById(filterItems);
		const items = Array.from(list.children).filter(node => {
  			return !(node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT');
		});

		let groupedItems = items.reduce((groups, item) => {
			let firstLetter = item.textContent.charAt(0).toUpperCase();
			if (!groups[firstLetter]) {
				groups[firstLetter] = [];
			}
			groups[firstLetter].push(item);
			return groups;
		}, {});

		for (let letter in groupedItems) {
			let heading = document.createElement("h2");
			heading.textContent = letter;
			list.appendChild(heading);

			let ul = document.createElement("ul");
			groupedItems[letter].forEach(item => {
				ul.appendChild(item);
			});
			list.appendChild(ul);
		}
	}
}
```

