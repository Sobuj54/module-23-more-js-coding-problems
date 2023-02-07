/*
1.if ticket number is less than 100 then ticket price will be per ticket:100tk

2.if ticket number is more than 100 but less than 200 ,,then first per 100 ticket price will be 100tk..and the rest ticket price will be 90 tk per piece

3. if you purchase more than 200 tickets then
  first 100 ticket price will be 100 tk per piece
  101 - 200 ticket price will be 90tk per piece
  more than 200 ticket price will be 70 tk per piece
*/ 

function ticketPrice(ticketQuantity){
    const first100TicketRate = 100;
    const second100TicketRate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const ticketPrice =ticketQuantity * first100TicketRate;
        return ticketPrice;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100TicketRate;
        const restTicket = ticketQuantity - 100;
        const restTicketPrice = restTicket * 90;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100TicketRate;
        const second100Price = 100 * second100TicketRate;
        const restTicket = ticketQuantity - 200;
        const restTicketPrice = restTicket * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const totalCost = ticketPrice(250);
console.log(totalCost);
