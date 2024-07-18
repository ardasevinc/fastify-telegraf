import { Type, Static } from '@fastify/type-provider-typebox';

const TFastifyTelegrafOptions = Type.Object({
  decoratorBotName: Type.Optional(Type.String({ default: 'telegramBot' })),
  waitForHealthPolling: Type.Optional(Type.Integer()),
  baseUrl: Type.Optional(Type.String()),
  webhookSecret: Type.Optional(Type.String()),
  botToken: Type.Readonly(Type.String()),
  apiRoot: Type.Optional(Type.String()),
  onUnhandledError: Type.Optional(
    Type.Function([Type.Any(), Type.Any()], Type.Void()),
  ),
});

type FastifyTelegrafOptions = Static<typeof TFastifyTelegrafOptions>;

export { type FastifyTelegrafOptions };
