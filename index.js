const core = require('@actions/core');
const github = require('@actions/github');

/**
 * Execute the merge
 *
 */
async function execute() {
  try {
    // Token required that has the permissions to do this
    const token = core.getInput('token');
    // The branch we want to merge into
    const target = core.getInput('target');
    // The branch we wish to merge into the target
    const source = core.getInput('source');
    // Get a octokit client
    const octokit = github.getOctokit(token);

    const repo = github.context.repo;

    await octokit.repos.merge({
      owner: repo.owner,
      repo: repo.repo,
      base: target,
      head: source,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

execute();
