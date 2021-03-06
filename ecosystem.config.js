module.exports = {
	apps: [{
		name: "MyDNS-Explorer",
		script: "dist//app/index.js",
		watch: ["dist//app", "./local_modules/active-module-framework/dist"],
		instances: 1,
		exec_mode: "cluster_mode",
		log_date_format: "YYYY-MM-DD HH:mm Z",
		merge_logs: true,
		error_file: "./log/error.log",
		out_file: "./log/access.log",
		node_args: ["--no-warnings", "--inspect=localhost:9229"],
		env: {
			"NODE_OPTIONS": "--inspect=localhost:9229 --no-warnings"
		}
	}]
}