const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testglobal')
		.setDescription('test')
		.addStringOption(option => option.setName('input').setDescription('test').setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		return interaction.reply(input);
	},
};