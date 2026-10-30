import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/**
 * Register /exit as an alias of the built-in /quit command.
 * ctx.shutdown() follows the same interactive quit path as /quit.
 */
export default function (pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Quit Pi (same as /quit)",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});
}
