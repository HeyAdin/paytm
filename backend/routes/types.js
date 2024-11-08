const zod = require('zod');

const signUpInputSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
});
// checks correct input for signup
function validateSignUpInput(req, res, next) {
    const body = req.body;
    const response = signUpInputSchema.safeParse(body);
    if (response.success) {
        console.log("signup inputs validated");
        next()
    }
    else {
        res.status(411).json({ msg: "invalid inputs" });
    }
}

const siginInputSchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6)
});

function validateSiginInInput(req,res,next){
    const body = req.body;
    const response = siginInputSchema.safeParse(body);
    if (response.success) {
        console.log("signin inputs validated");
        next()
    }
    else {
        res.status(411).json({ msg: "invalid inputs" });
    }
}
module.exports = {
    validateSignUpInput,
    validateSiginInInput
}
