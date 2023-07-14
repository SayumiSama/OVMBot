const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test')
		.addStringOption(option => option.setName('input').setDescription('test').setRequired(true)),
	async execute(interaction) {
		return interaction.reply(interaction.input);
	},
};