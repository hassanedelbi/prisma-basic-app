const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const { user, post } = new PrismaClient();

router.post('/', async (req, res) => {
	const { title, content, user_id } = req.body;

	const userExists = await user.findUnique({
		where: {
			id: user_id,
		},
	});
	if (!userExists) {
		return res.status(404).json({
			message: 'User not found',
		});
	}
	if (!title || !content || !user_id) {
		return res.status(400).json({
			message: 'Title, content & user are required',
		});
	}

	const newPost = await post.create({
		data: {
			title,
			content,
			user_id,
		},
	});

	res.json(newPost);
});

router.get('/:user_id', async (req, res) => {
	const { user_id } = req.params;
	let id = parseInt(user_id);
	const posts = await post.findMany({
		where: {
			user_id: id,
		},
		select: {
			title: true,
			content: true,
			user: true,
		},
	});

	res.json(posts);
});

module.exports = router;
