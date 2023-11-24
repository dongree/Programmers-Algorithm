function solution(tickets) {
  const ticketsNum = tickets.length;
  const isVisited = Array(ticketsNum).fill(false);

  const route = [];
  const routes = [];

  tickets.forEach((ticket, i) => {
    if (ticket[0] === 'ICN') {
      isVisited[i] = true;
      route.push(ticket[0]);
      dfs(ticket[1]);
      route.pop();
      isVisited[i] = false;
    }
  });

  function dfs(country) {
    if (route.length === ticketsNum) {
      routes.push([...route, country]);
      return;
    }
    for (let i = 0; i < ticketsNum; i++) {
      if (country === tickets[i][0] && !isVisited[i]) {
        isVisited[i] = true;
        route.push(country);
        dfs(tickets[i][1]);
        route.pop();
        isVisited[i] = false;
      }
    }
  }

  return routes.sort()[0];
}
