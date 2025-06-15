export function genTicket(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
}

export function sum(ticket) {
    return ticket.reduce((acc, num) => acc + num, 0);
}
