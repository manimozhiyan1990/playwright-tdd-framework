# By Role (BEST - recommended)
page.getByRole('button', { name: 'Login' });
page.getByRole('textbox', { name: 'Username' });
page.getByRole('link', { name: 'Home' });
page.getByRole('checkbox', { name: 'Remember me' });
page.getByRole('radio', { name: 'Male' });
page.getByRole('combobox');
page.getByRole('heading', { name: 'Welcome' });

# By Text
page.getByText('Login');
page.getByText('Submit', { exact: true });

# By Label (for input fields)
page.getByLabel('Username');
page.getByLabel('Password');

# By Placeholder
page.getByPlaceholder('Enter username');

# By Alt Text (images)
page.getByAltText('Profile picture');

# By Title
page.getByTitle('Close');

## By Test ID (best for automation frameworks)
page.getByTestId('login-button');

# CSS Selectors
page.locator('#username');                 // ID
page.locator('.login-btn');                // Class
page.locator('input[name="email"]');       // Attribute
page.locator('button[type="submit"]');
page.locator('div > span');                // Child
page.locator('ul li:nth-child(2)');        // Index

# XPath (less recommended but used)
page.locator('//input[@id="username"]');
page.locator('//button[text()="Login"]');
page.locator('//div[contains(text(),"Welcome")]');
page.locator('(//input[@type="text"])[1]');

# Chaining locators
page.locator('#form').locator('input');
page.getByRole('form').getByRole('button');

# Filtering
page.getByRole('listitem').filter({ hasText: 'Product 1' });
page.locator('div').filter({ hasText: 'Hello' });

# nth element
page.locator('button').nth(0);
page.locator('button').first();
page.locator('button').last();

# Inside frame
page.frameLocator('#frameId').locator('#username');

# Shadow DOM
page.locator('css=custom-element >> css=button');

# Multiple match handling
page.locator('button').count();
page.locator('button').allTextContents();