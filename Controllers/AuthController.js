import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Signup = async (req, res) => {
    const { Username, Email, Password } = req.body;

    try {
        let user = await User.findOne({ Email })
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        user = new User({
            Username,
            Email,
            Password: hashedPassword
        })
        await user.save();

        res.status(200).json({ message: " User Registered Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};



const Login = async (req, res) => {
    const { Email, Password } = req.body
    try {
        const user = await User.findOne({ Email });
        if (!user) return res.status(400).json({ message: "User does not exist" });

        const isMatch = await bcrypt.compare(Password, user.Password)
        if (!isMatch) return res.status(400).json({ message: "PLease Enter a Right Password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ user , token })
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}
export { Signup, Login };