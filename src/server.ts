import { serverHttp } from "./app";
const PORT =  process.env.PORT || 5000
serverHttp.listen(PORT, () => console.log(`server is running on port ${PORT}`))