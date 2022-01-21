# FAKEMEUP

### _Yet another (very very light) fake data generator_

R.I.P Faker.js 😥, so I just decided I would build my own tool and share it with whoever might find it useful.

> This package is not designed to replace Faker.js - which was heavy like hell by the way. The purpose is to keep it as light and basic as possible - so no localization or country specific stuff -, which should cover lots of needs.

# Install

install as a dev dependency

```
npm i fakemeup -D
```

ES6 import

```Javascript
// import default
import fakemeup from "fakemeup/dist"
// import individual functions
import {user, lorem, image, address, date} from "fakemeup/dist"
```

Require

```Javascript
// require default
const fakemeup = require("fakemeup/dist").default;
// require individual functions
const {user, lorem, image, address, date} = require("fakemeup/dist").default;
```

# Usage

## Fake user

```Javascript
fakemeup.user.firstName() // random first Name
fakemeup.user.lastName() // random last name
fakemeup.user.fullName() // random full name (first name + last name)
fakemeup.user.email() // picks a random fullname before @, eg: aaron.smith@gmail.com
fakemeup.user.email("mystring") // passes your custom string before @, eg: mystring@hotmail.com
fakemeup.user.phone() // renders a 10 digit phone number, eg: 34 87 90 21 65
fakemeup.user.avatar(300) // returns a square picture from https://pravatar.cc . Max size is 1000, eg: https://pravatar.cc/300?u=26538906 (random identifier after ?u=)
fakemeup.user.avatar(600, "johnDoe") // you can pass a custom unique identifier, eg: https://pravatar.cc/600?u=johnDoe

```

## Lorem text

```Javascript
fakemeup.lorem.paragraph() // returns a whole paragraph
fakemeup.lorem.sentence(4, 8) // pass min and max number of words (first word capitalized by default)
fakemeup.lorem.sentence(25, 35, false) // pass false as third argument to lowercase the first word
fakemeup.lorem.sentence(1, 1) // returns one word, set min === max for a fixed number of words
```

## Dummy photo

```Javascript
// random photos from unsplash (no api key needed)
fakemeup.image.random() // displays a random landscape photo 1280x720
fakemeup.image.random("square") // 3 preset ratios: "square", "portrait", "landscape" (sizes are 1000x1000, 576x1024, 1280x720)
fakemeup.image.random("250x420") // or any custom size "widthxheight"
fakemeup.image.random("portrait", "nature,purple") // optional, you can pass comma seperated keywords as second argument (ratio must be provided)
```

## Dummy address

```Javascript
fakemeup.address.country()
fakemeup.address.city() // US cities
fakemeup.address.state() // US states
fakemeup.address.way() // street, road, avenue, plaza ... etc
fakemeup.address.street() // name of the street, road, ...
fakemeup.address.number() // between 10 and 999
fakemeup.address.postcode() // between 10000 and 99999
fakemeup.address.fullAddress() // totally random, eg: 23 Albert Road, 34678 New-York, Mississipi FRANCE
```

## Random dates

```Javascript
// Year
fakemeup.date.year() // returns a random year between 1969 and now
fakemeup.date.year(2004) // optional minYear, returns a random year between minYear and now
fakemeup.date.year(2004, 2008) // optional minYear and maxYear, returns a random year between minYear and maxYear

// Month
fakemeup.date.month() // default, returns a random month as long string, eg: February
fakemeup.date.month("long") // same as default above
fakemeup.date.month("short") // returns a random month abbreviated, eg: Feb.
fakemeup.date.month("num") // returns a random month in two digit number format, eg: 02

// Day
fakemeup.date.day() // default, returns a random day as long string, eg: Monday
fakemeup.date.day("long") // same as default above
fakemeup.date.day("short") // returns a random day abbreviated, eg: Mon.
fakemeup.date.day("num") // returns a random day in two digit number format, eg: 02 - N.B. the range is between 01 and 28 to avoid silly dates like Feb 31 or April 31

// Date
fakemeup.date.full() // returns a whole date, eg: Sat Oct 08 2022, between 1969 and now by default
fakemeup.date.full("full") // same as above
fakemeup.date.full("slash") // returns date with slashes, eg: 12/3/2004
fakemeup.date.full("dash") //returns date with dashes, eg: 2019-09-17
fakemeup.date.full("dash", 2005, 2006) // optional, you can pass minYear and maxYear as arguments, eg: 2006-11-10
```
