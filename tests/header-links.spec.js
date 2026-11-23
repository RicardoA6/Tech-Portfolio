import { test, expect } from '@playwright/test'

// TC-02 (US-01): header links point to the right pages
test('TC-02 header links point to the right pages', async ({ page }) => {
  await page.goto('/')

  const header = page.getByRole('banner')

  await expect(header.getByRole('link', { name: 'About', exact: true })).toHaveAttribute('href', '/about')
  await expect(header.getByRole('link', { name: 'Portfolio', exact: true })).toHaveAttribute('href', '/portfolio')
  await expect(header.getByRole('link', { name: 'Services', exact: true })).toHaveAttribute('href', '/services')
  await expect(header.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('href', '/contact')
})
