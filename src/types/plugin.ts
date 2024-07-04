import { Type, Static } from '@fastify/type-provider-typebox';

const TFastifyTelegrafOptions = Type.Object({
  decoratorBotName: Type.String({ default: 'telegramBot' }),
  waitForHealthPolling: Type.Integer(),
  baseUrl: Type.String(),
  webhookSecret: Type.String(),
  botToken: Type.Readonly(Type.String()),
  onUnhandledError: Type.Function([Type.Any()], Type.Void()),
});

type FastifyTelegrafOptions = Static<typeof TFastifyTelegrafOptions>;

export { type FastifyTelegrafOptions };
