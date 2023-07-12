const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('praise')
		.setDescription('Praises anyone who is tagged!')
		.addUserOption(option => option.setName('target').setDescription('This user will be praised')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(user.toString() + ' ist ein süßling');
	},
};