import builder from './builder.js';

exports.getmsg = (event) => {
  let eventName = event.Records[0].Sns.MessageAttributes['X-Github-Event'].Value;

  const payload = JSON.parse(event.Records[0].Sns.Message);
  console.log(payload);

  let text = '';

  switch (eventName) {
    // Any time a Commit is commented on.
    case 'commit_comment':
    break;

    // Any time a Branch or Tag is created.
    case 'create':
    break;

    // Any time a Branch or Tag is deleted.
    case 'delete':
    break;

    // Any time a Repository is forked.
    case 'fork':
    break;

    // Any time a comment on an issue is created, edited, or deleted.
    case 'issue_comment':
    break;

    // Any time an Issue is assigned, unassigned, labeled,
    // unlabeled, opened, edited, milestoned, demilestoned,
    // closed, or reopened.
    case 'issues':
    break;

    // Any time a Label is created, edited, or deleted.
    case 'label':
    break;

    // Any time a User is added or removed as a collaborator
    // to a Repository, or has their permissions modified.
    case 'member':
    break;

    // Any time a User is added or removed from a team.
    // Organization hooks only.
    case 'membership':
    break;

    // Any time a Milestone is created, closed, opened,
    // edited, or deleted.
    case 'milestone':
    break;

    // Any time a user is added, removed, or invited
    // to an Organization. Organization hooks only.
    case 'organization':
    break;

    // Any time a Repository changes from private to public.
    case 'public':
    break;

    // Any time a comment on a pull request's unified diff
    // is created, edited, or deleted (in the Files Changed tab).
    case 'pull_request_review_comment':
    break;

    // Any time a pull request review is submitted.
    case 'pull_request_review':
    break;

    // Any time a pull request is assigned, unassigned,
    // labeled, unlabeled, opened, edited, closed, reopened,
    // or synchronized (updated due to a new push in the branch
    // that the pull request is tracking). Also any time
    // a pull request review is requested,
    // or a review request is removed. 
    case 'pull_request':
    break;

    // Any Git push to a Repository, including editing tags or
    // branches. Commits via API actions that update references
    // are also counted. This is the default event.
    case 'push':
      console.log("Pushing");
      text = builder.push(payload);
    break;

    // Any time a Repository is created, deleted
    // (organization hooks only), made public, or made private.
    case 'repository':
    break;

    // Any time a Release is published in a Repository.
    case 'release':
    break;

    // Any time a Repository has a status update from the API
    case 'status':
    break;

    // Any time a User stars a Repository.
    case 'watch':
    break;
  }

  return text;
}
