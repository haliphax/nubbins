// Synced from haliphax/narf (converted from .commitlintrc.cts to .cjs)
module.exports = {
	extends: ["gitmoji"],
	parserPreset: {
		parserOpts: {
			headerPattern: /^[^ ]+ (.*)$/,
			headerCorrespondence: ["subject"],
		},
	},
	rules: {
		"type-empty": [0, "always"],
	},
};