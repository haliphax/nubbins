import { writeFileSync } from "fs";

export const marginGenerator = () => {
	const output = [];

	for (let size of ["xxs", "xs", "s", "m", "l", "xl", "xxl"]) {
		for (let side of ["top", "bottom", "right", "left"]) {
			output.push(
				`.m${side[0]}-${size} { margin-${side}: var(--space-${size}); }\n`,
			);
		}

		output.push(`.mx-${size} { margin-inline: var(--space-${size}); }\n`);
		output.push(`.my-${size} { margin-block: var(--space-${size}); }\n`);
	}

	writeFileSync("src/margin.css", output.join(""), { encoding: "utf-8" });
};
