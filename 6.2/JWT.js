// Generate , verify , decode in JWT 

// Generate
const jwt = require("jsonwebtoken");

const value={
    name : "sneha",
    accountNumber : 123123
}

const token = jwt.sign(value,"secret");
// this token has been generated using this secret and hence this token can only be verified using this secret.
console.log(token);

// // Verify 
// const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30","secret")
// console.log(verifiedValue);