
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(5000)
    expect(displayed).toBe(true)
})

test('button shows up', async () => {
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
})

test('add duo', async () => {
    const addMovie = await driver.findElement(By.id('player-duo'))
    const displayed = await addMovie.isDisplayed()
    expect(displayed).toBe(true)
})