const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crazy')
		.setDescription('crazy?'),
	async execute(interaction) {
		return interaction.reply('Crazy? I was crazy once. They locked me in a room. A rubber room! A rubber room with rats,and rats make me crazy.');
	},
};