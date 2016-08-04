import request from 'request';

class JiraApi {

  static setCookies(session) {
    const cookies = request.jar();

    session.cookies.forEach((cookieStr) => {
      cookies.setCookie(cookieStr, `https://${session.domain}`);
    });

    return cookies;
  }

  static login(creds) {
    const options = {
      uri: `https://${creds.domain}/rest/auth/1/session`,
      method: 'POST',
      json: {
        username: creds.username,
        password: creds.password
      }
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const session = {
            username: creds.username,
            domain: creds.domain,
            cookies: response.headers['set-cookie'],
            session_id: body.session
          };
          resolve(session);
        } else {
          if (error) {
            return reject(error);
          } else {
            reject('Status Code:', response.statusCode);
          }
        }
      });
    });
  }

  static getUserTickets(session) {
    const cookies = this.setCookies(session);
    const options = {
      uri: `https://${session.domain}/rest/api/2/search`,
      method: 'GET',
      qs: {
        jql: `assignee="${session.username}"`,
        status: '"open"'
      },
      jar: cookies
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          if (error) {
            reject(error);
          } else {
            reject('Status Code:', response.statusCode);
          }
        }
      });
    });
  }
}

export default JiraApi;
