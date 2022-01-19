import * as lorem from "./functions/lorem.functions";
import * as user from "./functions/user.functions";
import * as image from "./functions/image.functions";

export default { lorem, user };

console.log(image.random("square", "dog"));

// console.log("lorem.paragraph =>", lorem.paragraph());
// console.log("lorem.sentence =>", lorem.sentence(5, 10));
// console.log("user.avatar =>", user.avatar());
// console.log("user.email =>", user.email());
// console.log("user.firstName =>", user.firstName());
// console.log("user.lastName =>", user.lastName());
// console.log("user.fullName =>", user.fullName());
// console.log("user.phone =>", user.phone());
