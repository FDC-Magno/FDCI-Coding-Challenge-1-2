//gets the fibonacci number based on num, with memoization for optimization purposes
function fibonacci(num) {
    if(num == 0) return 0
    if (num <= 1) return 1
  
    return fibonacci(num - 1) + fibonacci(num - 2)
}

$(function() {
    $('.alert').hide()
    $('#submit_btn').click((e) => {
        e.preventDefault()
        const max_number = $('#max_number').val()
        const target = $('.alert') 
        if(max_number) {
            target.text('Fibonacci: \n')
        } else {
            target.html('Fibonacci: <div class="text-danger">Please enter a number</div>')
        }
        for (let index = 0; index < max_number; index++) {
            let fibonacci_number = fibonacci(index)
            if(index == 0) {
                target.text(`${target.text()} ${fibonacci_number}`)
            } else {
                target.text(`${target.text()}, ${fibonacci_number}`)
            }
        }
        $('.alert').show()
    })
})