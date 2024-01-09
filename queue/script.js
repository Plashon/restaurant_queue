let queue = [];
const maxSize = 5; // Define the maximum size of the queue

function isFull() {
  return queue.length === maxSize;
}
function queueCount() {
  return queue.length;
}

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber) {
    if (isFull()) {
      alert("Queue is full!");
      document.getElementById("phoneNumber").value = ""; // Clear the input
    } else {
      queue.push(phoneNumber);
      document.getElementById("phoneNumber").value = ""; // Clear the input
      updateQueueDisplay();
    }
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("Next customer: " + queue.shift());
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
    const queueCount = document.getElementById("queueCount");
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = `
    <h3>Queue</h3>
  `;
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}

console.log(queueCount);