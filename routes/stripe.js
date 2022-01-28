const router = require('express').Router();
// const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
	if (req.body.tokenId && req.body.amount) {
		res.status(200).json({
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		});
	} else {
		res.status(500).json({ error: 'Error' });
	}
	/* stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  ); */
});

module.exports = router;
