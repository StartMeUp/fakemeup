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
import fakemeup from "fakemeup/dist"
```

Require

```Javascript
const fakemeup = require("fakemeup/dist").default;
```

# Usage

## Fake user

```Javascript
// random first Name
fakemeup.user.firstName()

// random last name
fakemeup.user.lastName()

// random full name (first name + last name)
fakemeup.user.fullName()

// random email
fakemeup.user.email() // picks a random fullname before @, eg: aaron.smith@gmail.com
fakemeup.user.email("mystring") // passes your custom string before @, eg: mystring@hotmail.com

// phone number
fakemeup.user.phone() // renders a 10 digit phone number, eg: 34 87 90 21 65

// user's random square avatar picture from https://pravatar.cc/
fakemeup.user.avatar(300) // pass a size. Max size is 1000, eg: https://pravatar.cc/300?u=26538906 (random identifier after ?u=)
fakemeup.user.avatar(600, "johnDoe") // you can pass a custom unique identifier, eg: https://pravatar.cc/600?u=johnDoe

```

## Lorem text

```Javascript
// returns a whole paragraph
fakemeup.lorem.paragraph()

// returns one sentence
fakemeup.lorem.sentence(4, 8) // pass min and max number of words (first word capitalized by default)
fakemeup.lorem.sentence(25, 35, false) // pass false as third argument to lowercase the first word
fakemeup.lorem.sentence(1, 1) // returns one word, set min === max for a fixed number of words
```

## Dummy photo

```Javascript
// get random photos from unsplash (no api key needed)
fakemeup.image.random() // displays a random landscape photo 1280x720
fakemeup.image.random("square") // 3 preset ratios: "square", "portrait", "landscape" (sizes are 1000x1000, 576x1024, 1280x720)
fakemeup.image.random("250x420") // or any custom size "widthxheight"
fakemeup.image.random("portrait", "nature,purple") // optional, you can pass comma seperated keywords as second argument (ratio must be provided)
```
