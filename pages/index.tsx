import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	useEffect(() => {
		const appConfig = {
			deploymentKey: 'process.env.DEPLOYMENT_KEY',
		};
		// @ts-ignore
		window.Twilio.initWebchat(appConfig);
	}, []);

	return (
		<>
			<Head>
				<script
					defer
					src='https://media.twiliocdn.com/sdk/js/webchat-v3/releases/1.0.0/webchat.min.js'
					integrity='sha256-r0K9qRArB8v/DRDech+o4GYZhbgt4cHVmLLcw4891k8='
					crossOrigin='anonymous'
				></script>
			</Head>
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
			>
				<div id='twilio-webchat-widget-root'></div>
			</main>
		</>
	);
}
