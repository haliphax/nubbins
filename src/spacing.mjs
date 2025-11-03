import { writeFileSync } from "fs";

export const spacingGenerator = (style) => {
	const output = [];

	for (let size of ["xxs", "xs", "s", "m", "l", "xl", "xxl"]) {
		for (let side of ["top", "bottom", "right", "left"]) {
			output.push(
				`.${style[0]}${side[0]}-${size} { ${style}-${side}: var(--space-${size}); }\n`,
			);
		}

		output.push(
			`.${style[0]}x-${size} { ${style}-inline: var(--space-${size}); }\n`,
		);
		output.push(
			`.${style[0]}y-${size} { ${style}-block: var(--space-${size}); }\n`,
		);
	}

	writeFileSync(`src/styles/${style}.css`, output.join(""), {
		encoding: "utf-8",
	});
};
