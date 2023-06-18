import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Register user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({ message: 'User name already in use.' });
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({ username, password: hashedPassword });

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '3d' })

        await newUser.save();

        res.json({ newUser, token, message: 'User created' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'User could not be created' });
    }
}
// Login user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(403).json({ message: 'This kind of user doesn\'t exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({ message: 'Login or password is incorrect' });
        }

        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, { expiresIn: '3d' })

        res.json({
            token,
            user,
            message: 'User logged in',
        })

    } catch (error) {
        console.log(error);
        res.json({ message: 'Could not login.' });
    }
};

// User order
export const order = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(403).json({ message: 'This user does not exist.' });
        }

        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, { expiresIn: '3d' })

        res.json({
            user,
            token,
        })
    } catch (error) {
        res.json({ message: 'No access for this user.' });
    }
};