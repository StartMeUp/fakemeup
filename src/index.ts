import * as lorem from "./functions/lorem.functions";
import * as user from "./functions/user.functions";
import * as image from "./functions/image.functions";

export default { lorem, user, image };

console.log(lorem.sentence(1, 1, false));
