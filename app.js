function table_gen() {
  let tablenumber = document.querySelector("#table_num");
  let tablerange = document.querySelector("#table_range");
  let para_in = document.querySelector("#para_inner");

  if (table_num.value === "" && table_range.value === "") {
    Swal.fire({
      title: "Inputs are Empty! \n \n Enter Table Number & Range.",
    
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  } else {
    for (let i = 1; i <= table_range.value; i++) {
      para_inner.innerText += ` ${table_num.value}   x  ${i} = ${
        table_num.value * i
      } \n`;
    }
  }

  table_num.value = "";
  table_range.value = "";
}
