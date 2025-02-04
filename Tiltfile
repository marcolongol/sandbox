print(
    r"""
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\                                 __                                 __                __
\\ .--------.---.-.----.----.-----|  .-----.-----.-----.-----.  .----|  .-----.--.--.--|  |
\\ |        |  _  |   _|  __|  _  |  |  _  |     |  _  |  _  |__|  __|  |  _  |  |  |  _  |
\\ |__|__|__|___._|__| |____|_____|__|_____|__|__|___  |_____|__|____|__|_____|_____|_____|
\\                                               |_____|
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
""".strip()
)

config.define_string("env", False, "The environment to deploy to")

VALUES_DICT = {
    "LOCAL": "./chart/values-local.yaml",
    "DEV": "./chart/values-dev.yaml",
    "STAGING": "./chart/values-staging.yaml",
    "PROD": "/chart/./values-prod.yaml",
}

cfg = config.parse()

# SECTION: Frotend
# ----------------

docker_build(
    "frontend",
    context=".",
    dockerfile="apps/frontend/Dockerfile",
    only=["./dist/apps/frontend/browser"],
    live_update=[
        sync("./dist/apps/frontend/browser", "/usr/share/nginx/html"),
    ],
)

local_resource(
    "frontend:serve:dev",
    serve_cmd="npx nx run @marcolongo.cloud/frontend:serve",
    labels=["frontend"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
    links=[link("http://localhost:4200", "Frontend")],
)

local_resource(
    "frontend:build:dev",
    serve_cmd="npx nx run @marcolongo.cloud/frontend:build -- --watch",
    labels=["frontend"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
)

# SECTION K8s
# -----------
k8s_yaml(
    helm(
        "./chart",
        "marcolongo-cloud",
        "marcolongo-cloud",
        values=[VALUES_DICT[cfg.get("env", "LOCAL")]],
    )
)

k8s_resource(
    "marcolongo-cloud-frontend",
    port_forwards=[port_forward(80, name="frontend")],
    labels=["frontend"],
    auto_init=False,
)
