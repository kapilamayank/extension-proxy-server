import authService from '../appwrite/authService.js';
import crudService from '../appwrite/crudService.js';

export async function handleAddProblemToAppwrite(req, res) {
    const { problemName, problemUrl, problemDifficulty, problemTags, problemNotes, revisionFlag, userId } = req.body;

    try {
        const response = await crudService.createProblem({
            problemName,
            problemDifficulty,
            problemUrl,
            problemTags,
            userId,
            problemNotes,
            revisionFlag
        });

        if (response.$id)
            return res.json({ successMessage: "Created successfully!" });
        else 
            return res.json({ errorMessage: response.message });
    } catch (error) {
        return res.json({ errorMessage: error.message });
    }
}

export async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.json({ errorMessage: "Supply email or password" });

    try {
        const response = await authService.login({ email, password });
        return res.json({ userId: response.userId });
    } catch (error) {
        return res.json({ errorMessage: error.message })
    }
}