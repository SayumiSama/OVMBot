const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crazy')
		.setDescription('crazy?')
		.addStringOption(option => option.setName('input').setDescription('Choose a Word!').setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		return interaction.reply(input + ' ? I was ' + input + ' once. They locked me in a room. A rubber room! A rubber room with rats, and rats make me ' + input + '.');
	},
};