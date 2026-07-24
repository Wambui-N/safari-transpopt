import { chromium } from "playwright";

const shotDir =
  "C:\\Users\\wambu\\AppData\\Local\\Temp\\claude\\c--Users-wambu-OneDrive-Documents-Websites-savanna-leaf\\96209b26-63df-471c-8567-5891677ed211\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3003/", { waitUntil: "networkidle" });
await page.waitForSelector("text=Request a quote");
await page.screenshot({ path: `${shotDir}/01-initial.png` });

// 1. Submit with nothing filled -> destination should highlight, no modal
await page.getByRole("button", { name: "Request a quote" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${shotDir}/02-empty-validation.png` });

// 2. Open destination dropdown
await page.getByRole("button", { name: "Where to?" }).click();
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/03-destination-open.png` });
await page.getByText("Maasai Mara", { exact: true }).click();
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/04-destination-selected.png` });

// 3. Submit again -> departure date should highlight
await page.getByRole("button", { name: "Request a quote" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${shotDir}/05-departure-validation.png` });

// 4. Open departure date picker
await page.getByRole("button", { name: "DD / MM / YYYY" }).first().click();
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/06-departure-calendar.png` });

// pick a day roughly a week out that isn't disabled
const dayButtons = page.locator("button:not([disabled])").filter({
  hasText: /^\d{1,2}$/,
});
const count = await dayButtons.count();
await dayButtons.nth(Math.min(10, count - 1)).click();
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/07-departure-selected.png` });

// 5. Bump group size
await page.getByRole("button", { name: "Increase group size" }).click();
await page.getByRole("button", { name: "Increase group size" }).click();
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/08-groupsize.png` });

// 6. Submit -> modal should open
await page.getByRole("button", { name: "Request a quote" }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: `${shotDir}/09-modal-open.png` });

// 7. Submit modal empty -> both fields highlight
const sendBtn = page.getByRole("button", { name: /Send via WhatsApp/ });
await sendBtn.click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${shotDir}/10-modal-validation.png` });

// 8. Fill name + contact
await page.getByPlaceholder("Your name").fill("Jane Traveller");
await page.getByPlaceholder("+254 or email address").fill("jane@example.com");
await page.waitForTimeout(200);
await page.screenshot({ path: `${shotDir}/11-modal-filled.png` });

// 9. Submit -> should open a wa.me popup and close the modal
const [popup] = await Promise.all([
  page.waitForEvent("popup"),
  sendBtn.click(),
]);
await popup.waitForLoadState("domcontentloaded").catch(() => {});
console.log("POPUP_URL:", popup.url());
await page.waitForTimeout(400);
await page.screenshot({ path: `${shotDir}/12-modal-closed.png` });

console.log("CONSOLE_ERRORS:", JSON.stringify(errors));

await browser.close();
