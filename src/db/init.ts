import blockbuster from "./models/blockbuster.model";
import comments from "./models/coments.model";
import user from "./models/users.model";

const dbInit = () =>
Promise.all([
  blockbuster.sync({ force: true }),
  comments.sync({ force: true }),
  user.sync({ force: true }),
])

export default dbInit;