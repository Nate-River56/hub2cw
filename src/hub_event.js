import builder from './builder.js';

exports.getmsg = (event) => {
  let eventName = event.Records[0].Sns.MessageAttributes['X-Github-Event'].Value;
  console.log(eventName);

  const payload = JSON.parse(event.Records[0].Sns.Message);
  console.log(JSON.stringify(payload, null, 2));

  let text = '';

  switch (eventName) {
    // Any time a Commit is commented on.
    case 'commit_comment':
      // text += builder.commit_comment(payload);
    break;

    // Any time a Branch or Tag is created.
    case 'create':
      // text += builder.create(payload);
    break;

    // Any time a Branch or Tag is deleted.
    case 'delete':
      // text += builder.delete(payload);
    break;

    // Any time a Repository is forked.
    case 'fork':
      // text += builder.fork(payload);
    break;

    // Any time a comment on an issue is created, edited, or deleted.
    case 'issue_comment':
      // text += builder.issue_comment(payload);
    break;

    // Any time an Issue is assigned, unassigned, labeled,
    // unlabeled, opened, edited, milestoned, demilestoned,
    // closed, or reopened.
    case 'issues':
      // text += builder.issue(payload);
    break;

    // Any time a Label is created, edited, or deleted.
    case 'label':
      // text += builder.label(payload);
    break;

    // Any time a User is added or removed as a collaborator
    // to a Repository, or has their permissions modified.
    case 'member':
      // text += builder.member(payload);
    break;

    // Any time a User is added or removed from a team.
    // Organization hooks only.
    case 'membership':
      // text += builder.membership(payload);
    break;

    // Any time a Milestone is created, closed, opened,
    // edited, or deleted.
    case 'milestone':
      // text += builder.milestone(payload);
    break;

    // Any time a user is added, removed, or invited
    // to an Organization. Organization hooks only.
    case 'organization':
      // text += builder.organization(payload);
    break;

    // Any time a Repository changes from private to public.
    case 'public':
      // text += builder.public(payload);
    break;

    // Any time a comment on a pull request's unified diff
    // is created, edited, or deleted (in the Files Changed tab).
    case 'pull_request_review_comment':
      // text += builder.pull_request_review_comment(payload);
    break;

    // Any time a pull request review is submitted.
    case 'pull_request_review':
      // text += builder.pull_request_review(payload);
    break;

    // Any time a pull request is assigned, unassigned,
    // labeled, unlabeled, opened, edited, closed, reopened,
    // or synchronized (updated due to a new push in the branch
    // that the pull request is tracking). Also any time
    // a pull request review is requested,
    // or a review request is removed.
    case 'pull_request':
      // text += builder.pull_request(payload);
    break;

    // Any Git push to a Repository, including editing tags or
    // branches. Commits via API actions that update references
    // are also counted. This is the default event.
    case 'push':
      text += builder.push(payload);
    break;

    // Any time a Repository is created, deleted
    // (organization hooks only), made public, or made private.
    case 'repository':
      // text += builder.repository(payload);
    break;

    // Any time a Release is published in a Repository.
    case 'release':
      // text += builder.relase(payload);
    break;

    // Any time a Repository has a status update from the API
    case 'status':
      // text += builder.status(payload);
    break;

    // Any time a User stars a Repository.
    case 'watch':
      // text += builder.watch(payload);
    break;
  }

  return text;
}
