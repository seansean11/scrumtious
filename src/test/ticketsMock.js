export default [
  {
    expand: 'renderedFields,names,schema,transitions,editmeta,changelog',
    id: '14201',
    self: 'http://localhost:8090/jira/rest/api/2/issue/10000',
    key: 'EXP-572',
    fields: {
      summary: 'Search panel tab summary',
      issuetype: {
        self: 'http://localhost:8090/jira/rest/api/2/issuetype/1',
        id: '1',
        description: 'A problem which impairs or prevents the functions of the product.',
        iconUrl: 'http://localhost:8090/jira/images/icons/bug.gif',
        name: 'Bug',
        subtask: false
      },
      status: {
        self: 'http://localhost:8090/jira/rest/api/2/status/1',
        description: 'The issue is open and ready for the assignee to start work on it.',
        iconUrl: 'http://localhost:8090/jira/images/icons/status_open.gif',
        name: 'Open',
        id: '1'
      },
      labels: [],
      votes: {
        self: 'http://localhost:8090/jira/rest/api/2/issue/MKY-1/votes',
        votes: 0,
        hasVoted: false
      },
      workratio: -1,
      assignee: {
        self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
        name: 'admin',
        emailAddress: 'admin@example.com',
        avatarUrls: {
          '16x16': 'http://localhost:8090/jira/secure/useravatar?size=small&avatarId=10062',
          '48x48': 'http://localhost:8090/jira/secure/useravatar?avatarId=10062'
        },
        displayName: 'Administrator',
        active: true
      },
      fixVersions: [],
      resolution: null,
      attachment: [],
      resolutiondate: null,
      creator: {
        self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
        name: 'admin',
        emailAddress: 'admin@example.com',
        avatarUrls: {
          '16x16': 'https://avatar-cdn.atlassian.com/9edaea3674ccf61d9b91571818cc48a7?s=16&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dsmichael%26avatarId%3D10800%26noRedirect%3Dtrue',
          '24x24': 'https://avatar-cdn.atlassian.com/9edaea3674ccf61d9b91571818cc48a7?s=24&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dsmichael%26avatarId%3D10800%26noRedirect%3Dtrue',
          '32x32': 'https://avatar-cdn.atlassian.com/9edaea3674ccf61d9b91571818cc48a7?s=32&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dsmichael%26avatarId%3D10800%26noRedirect%3Dtrue',
          '48x48': 'https://avatar-cdn.atlassian.com/9edaea3674ccf61d9b91571818cc48a7?s=48&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dsmichael%26avatarId%3D10800%26noRedirect%3Dtrue'
        },
        displayName: 'Sean Michael',
        active: true
      },
      project: {
        self: 'http://localhost:8090/jira/rest/api/2/project/MKY',
        id: '10001',
        key: 'MKY',
        name: 'monkey',
        avatarUrls: {
          '16x16': 'http://localhost:8090/jira/secure/projectavatar?size=small&pid=10001&avatarId=10011',
          '48x48': 'http://localhost:8090/jira/secure/projectavatar?pid=10001&avatarId=10011'
        }
      },
      versions: [],
      environment: null,
      updated: '2011-11-22T09:23:02.302+1100',
      created: '2011-11-22T09:22:59.899+1100',
      priority: {
        self: 'http://localhost:8090/jira/rest/api/2/priority/3',
        iconUrl: 'http://localhost:8090/jira/images/icons/priority_major.gif',
        name: 'Major',
        id: '3'
      },
      description: 'Curabitur a accumsan odio, ut faucibus justo. Proin feugiat pretium nisi. Aliquam erat volutpat. Aliquam congue augue gravida purus vestibulum ultricies. Donec tincidunt accumsan purus, id cursus libero lacinia ac. Proin sit amet dolor nulla. Nulla facilisi. Vestibulum vehicula pellentesque semper. Phasellus eget massa mi. Vivamus ac bibendum mi, in euismod leo. Nunc et tellus in elit efficitur iaculis sit amet at dolor. Nulla varius libero a libero pretium, finibus cursus leo venenatis.',
      duedate: null,
      components: [],
      comment: {
        startAt: 0,
        maxResults: 1,
        total: 1,
        comments: [
          {
            self: 'http://localhost:8090/jira/rest/api/2/issue/10000/comment/10000',
            id: '10000',
            author: {
              self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
              name: 'admin',
              emailAddress: 'admin@example.com',
              avatarUrls: {
                '16x16': 'http://localhost:8090/jira/secure/useravatar?size=small&avatarId=10062',
                '48x48': 'http://localhost:8090/jira/secure/useravatar?avatarId=10062'
              },
              displayName: 'Administrator',
              active: true
            },
            body: 'comment',
            updateAuthor: {
              self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
              name: 'admin',
              emailAddress: 'admin@example.com',
              avatarUrls: {
                '16x16': 'http://localhost:8090/jira/secure/useravatar?size=small&avatarId=10062',
                '48x48': 'http://localhost:8090/jira/secure/useravatar?avatarId=10062'
              },
              displayName: 'Administrator',
              active: true
            },
            created: '2011-11-22T09:23:02.129+1100',
            updated: '2011-11-22T09:23:02.129+1100',
            visibility: {
              type: 'role',
              value: 'Administrators'
            }
          }
        ]
      },
      watches: {
        self: 'http://localhost:8090/jira/rest/api/2/issue/MKY-1/watchers',
        watchCount: 0,
        isWatching: false
      }
    }
  },
  {
    expand: 'renderedFields,names,schema,transitions,editmeta,changelog',
    id: '14000',
    self: 'http://localhost:8090/jira/rest/api/2/issue/2',
    key: 'EXP-567',
    fields: {
      summary: 'Insurance demo summary',
      issuetype: {
        self: 'http://localhost:8090/jira/rest/api/2/issuetype/1',
        id: '1',
        description: 'Lorem Ipsum.',
        iconUrl: 'http://localhost:8090/jira/images/icons/bug.gif',
        name: 'Bug',
        subtask: false
      },
      status: {
        self: 'http://localhost:8090/jira/rest/api/2/status/1',
        description: 'The issue is open and ready for the assignee to start work on it.',
        iconUrl: 'http://localhost:8090/jira/images/icons/status_open.gif',
        name: 'Open',
        id: '1'
      },
      labels: [],
      votes: {
        self: 'http://localhost:8090/jira/rest/api/2/issue/MKY-1/votes',
        votes: 0,
        hasVoted: false
      },
      workratio: -1,
      assignee: {
        self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
        name: 'Sean Michael',
        emailAddress: 'sean@example.com',
        avatarUrls: {
          '16x16': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=16&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D10334%26noRedirect%3Dtrue',
          '24x24': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=24&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D10334%26noRedirect%3Dtrue',
          '32x32': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=32&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D10334%26noRedirect%3Dtrue',
          '48x48': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=48&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D10334%26noRedirect%3Dtrue'
        },
        displayName: 'smichael',
        active: true
      },
      fixVersions: [],
      resolution: null,
      attachment: [],
      resolutiondate: null,
      creator: {
        self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
        name: 'admin',
        emailAddress: 'admin@example.com',
        avatarUrls: {
          '16x16': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=16&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D10334%26noRedirect%3Dtrue',
          '24x24': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=24&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D10334%26noRedirect%3Dtrue',
          '32x32': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=32&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D10334%26noRedirect%3Dtrue',
          '48x48': 'https://avatar-cdn.atlassian.com/f186cc4dcd094920eed717118791443c?s=48&d=https%3A%2F%2Fdev-msi.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D10334%26noRedirect%3Dtrue'
        },
        displayName: 'Sean Michael',
        active: true
      },
      project: {
        self: 'http://localhost:8090/jira/rest/api/2/project/MKY',
        id: '10001',
        key: 'MKY',
        name: 'monkey',
        avatarUrls: {
          '16x16': 'http://localhost:8090/jira/secure/projectavatar?size=small&pid=10001&avatarId=10011',
          '48x48': 'http://localhost:8090/jira/secure/projectavatar?pid=10001&avatarId=10011'
        }
      },
      versions: [],
      environment: null,
      updated: '2011-11-22T09:23:02.302+1100',
      created: '2011-11-22T09:22:59.899+1100',
      priority: {
        self: 'http://localhost:8090/jira/rest/api/2/priority/3',
        iconUrl: 'http://localhost:8090/jira/images/icons/priority_major.gif',
        name: 'Major',
        id: '3'
      },
      description: 'Cras sollicitudin lorem vitae risus tincidunt volutpat. In accumsan augue volutpat elit laoreet, id hendrerit magna sagittis. Donec imperdiet augue vel posuere sollicitudin. Suspendisse posuere eleifend felis. Donec sit amet pulvinar ipsum. Nunc vel lacus malesuada, porta est a, viverra arcu. Mauris egestas enim non suscipit porttitor. Duis lacinia faucibus mauris et ornare. Etiam in est sed orci ullamcorper ultricies sit amet ut dolor. Cras faucibus metus lacinia aliquet feugiat. Nulla sagittis non nibh vitae iaculis. Aenean lacinia odio at tellus convallis, efficitur suscipit nisi porta. Mauris vitae varius nibh.',
      duedate: null,
      components: [],
      comment: {
        startAt: 0,
        maxResults: 1,
        total: 1,
        comments: [
          {
            self: 'http://localhost:8090/jira/rest/api/2/issue/2/comment/2',
            id: '2',
            author: {
              self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
              name: 'admin',
              emailAddress: 'admin@example.com',
              avatarUrls: {
                '16x16': 'http://localhost:8090/jira/secure/useravatar?size=small&avatarId=10062',
                '48x48': 'http://localhost:8090/jira/secure/useravatar?avatarId=10062'
              },
              displayName: 'Administrator',
              active: true
            },
            body: 'comment',
            updateAuthor: {
              self: 'http://localhost:8090/jira/rest/api/2/user?username=admin',
              name: 'admin',
              emailAddress: 'admin@example.com',
              avatarUrls: {
                '16x16': 'http://localhost:8090/jira/secure/useravatar?size=small&avatarId=10062',
                '48x48': 'http://localhost:8090/jira/secure/useravatar?avatarId=10062'
              },
              displayName: 'Administrator',
              active: true
            },
            created: '2011-11-22T09:23:02.129+1100',
            updated: '2011-11-22T09:23:02.129+1100',
            visibility: {
              type: 'role',
              value: 'Administrators'
            }
          }
        ]
      },
      watches: {
        self: 'http://localhost:8090/jira/rest/api/2/issue/MKY-1/watchers',
        watchCount: 0,
        isWatching: false
      }
    }
  }
];
